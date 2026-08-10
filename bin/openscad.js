#!/usr/bin/env node
// OpenSCAD ships as an .app on macOS, so `openscad` is not on the PATH there —
// that is the only reason this wrapper exists. It never installs anything: the
// version this replaces ran `brew install --cask openscad` behind your back.
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';

const apps = [
  '/Applications/OpenSCAD.app/Contents/MacOS/OpenSCAD',
  `${homedir()}/Applications/OpenSCAD.app/Contents/MacOS/OpenSCAD`,
];

const binary = process.env.OPENSCAD || apps.find(existsSync) || 'openscad';
const { status, error } = spawnSync(binary, process.argv.slice(2), {
  stdio: 'inherit',
});

if (error) {
  console.error(
    `OpenSCAD not found (tried ${binary}). Install it — macOS: ` +
      '`brew install --cask openscad` — or point $OPENSCAD at the binary.',
  );
  process.exit(127);
}

process.exit(status ?? 1);
