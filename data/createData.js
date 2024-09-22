import fs from 'fs';


const in_path = "./datasource"
const out_path = "./"

// Create the ou directory if it doesn't exist
if (!fs.existsSync(out_path)) {
    fs.mkdirSync(out_path);
}

const out = {};
const filenames = fs.readdirSync(in_path);
for (const category of filenames) {
    const HTMfiles = fs.readdirSync(`${in_path}/${category}`);
    for (const HTMfile of HTMfiles) {
        out[HTMfile.replace(".htm", "")] = {};
        out[HTMfile.replace(".htm", "")].category = category;
        const dataFR = fs.readFileSync(
            `${in_path}/${category}/${HTMfile}`,
            "utf-8"
        );
        let reachedHeaderEnd = false;
        for (const line of dataFR.split("\n")) {
            if (line.length == 0 && !reachedHeaderEnd) {
                reachedHeaderEnd = true;
            }
            if (line.length != 0 && !reachedHeaderEnd) {
                const key = line.split(":")[0];
                const value = line.split(":")[1].trim();
                out[HTMfile.replace(".htm", "")][key] = value;
            }
            if (reachedHeaderEnd) break;
        }
        const descriptionRegex =
            /[-]{2,} Desc \(en\) [-]{2,}([\s\S]*?)[-]{2,} Desc \(fr\) [-]{2,}([\s\S]*?)[-]{2,} End desc [-]{2,}/gm;
        const match = descriptionRegex.exec(dataFR);
        if (match) {
            out[HTMfile.replace(".htm", "")]["descEN"] = match[1].trim();
            out[HTMfile.replace(".htm", "")]["descFR"] = match[2].trim();
        } else {
            console.log("Error capturing descriptions in: ", category, HTMfile);
        }
        const metaRegex = /[-]{3,} ([\s\S]*?) [-]{2,}([\s\S]*?)[-]{3,}/gm;
        const matchMeta = metaRegex.exec(dataFR);
        if (matchMeta) {
            const keyValues = matchMeta[2].split("\n");
            for (const keyValue of keyValues) {
                const key = keyValue.split(":")[0].trim();
                const value = keyValue.split(":")[1];
                if (value != undefined) {
                    out[HTMfile.replace(".htm", "")][key] = value.trim();
                }
            }
        }
    }
}

fs.writeFileSync(
    `${out_path}/data.ts`,
    `export const data = ${JSON.stringify(out, null, 2)}`
);