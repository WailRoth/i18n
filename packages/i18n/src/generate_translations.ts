import path from "node:path";
import {readdir} from "fs/promises";
import fs from "node:fs";


export default async function generateTranslations() {

  //const baseDir = 'node_modules/@izzyjs/i18n/build/src/client'
  //const baseDir = './build/src/client'
  //const jsFile = `${baseDir}/translations.js`
  //const dtsFile = `${baseDir}/translations.d.ts`
  const localePath = path.resolve(process.cwd(), `resources/lang/`)

  await translations(localePath)
}

async function translations(localePath: string) {
  //const translations: Translation[] = []

  try {
    const files = await readdir(localePath, { recursive: true });

    for(const file of files) {
      if (file.endsWith('validator.json')) {
        const parsedFile = JSON.parse(fs.readFileSync(file, 'utf8'))
        Object.entries(parsedFile).forEach(([key, value]) => {
          console.log(`Key: ${key}, Value: ${value}`);
        });
      }
    }
  }catch (err) {
    console.error(err);
  }

}
