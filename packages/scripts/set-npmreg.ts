import { $ } from 'zx';
import { green } from 'kolorist';
export async function setNpmReg(reglink: string) {
  await $`npm config set registry ${reglink}`;
  console.log(green('Set success!!!'));
  console.log(`NPM register is : ${green(reglink)} now!`);
}
