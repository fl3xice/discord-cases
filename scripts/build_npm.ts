import { build, emptyDir } from "https://deno.land/x/dnt@0.30.0/mod.ts";

await emptyDir("./npm");

await build({
    entryPoints: ["./mod.ts"],
    test: true,
    rootTestDir: "./tests",
    packageManager: "yarn",
    outDir: "./yarn",
    shims: {
        deno: true,
    },
    package: {
        name: "@flexice/case",
        version: Deno.args[0],
        description: "Cases for Discord Bot",
        license: "MIT",
    },
});
