#! /usr/bin/env node
// Run `npm start` to start the demo
import {
  intro,
  outro,
  confirm,
  select,
  spinner,
  isCancel,
  cancel,
  text,
} from '@clack/prompts';
import { setTimeout as sleep } from 'node:timers/promises';
import color from 'picocolors';
import { bdcodeHelp } from './help/help.js';



async function main() {
  console.log();
  intro(color.inverse(' DBCode '));

  return bdcodeHelp()
  const name = await text({
    message: 'What is your name?',
    placeholder: 'Anonymous',
  });

  if (isCancel(name)) {
    cancel('Operation cancelled');
    return process.exit(0);
  }

  const shouldContinue = await confirm({
    message: 'Do you want to continue?',
  });

  if (isCancel(shouldContinue)) {
    cancel('Operation cancelled');
    return process.exit(0);
  }

  const projectType = await select({
    message: 'Pick a project type.',
    options: [
      { value: 'ts', label: 'TypeScript' },
      { value: 'js', label: 'JavaScript' },
      { value: 'coffee', label: 'CoffeeScript', hint: 'oh no' },
    ],
  });

  if (isCancel(projectType)) {
    cancel('Operation cancelled');
    return process.exit(0);
  }

  const s = spinner();
  s.start('Installing via npm');

  await sleep(3000);

  s.stop('Installed via npm');

  outro("You're all set!");

  await sleep(1000);
}

main().catch(console.error);
