/** @typedef {import('./release.mjs').ReleaseConfig} ReleaseConfig */

/** @type {ReleaseConfig} */
export default {
  /** Single-package monorepo (default Kamod layout) */
  packages: ["packages/core"],
  tagPackage: "packages/core",
  qaCommand: "pnpm release:check",

  /** Multi-package: discover all non-private packages under packages/ */
  // discoverPackages: "packages/*",
  // tagPackage: "packages/core",

  /** Root package repo (e.g. kamod-brand, preactpress) */
  // packages: ["."],
  // tagPackage: ".",

  /** Optional: run syncpack before commit (kamod-ui) */
  // syncLockfile: true,

  commitMessage: (version) => `chore: release v${version}`,
};
