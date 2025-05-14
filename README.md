## CSS migration tool from Primeflex "Grid system" to TailwindCSS

### This tool is meant for Angular projects that use the Primeflex "Grid system". It should be used before the CSS is migrated with `primeclt pf2tw` as otherwise the class names will already be renamed and then likely not be found.
### How to use:
- install the package
```
npm i css-grid-pf2tw
```
- run the `migrate` command
```
npx css-grid-pf2tw migrate
```
You wil be prompted to enter the file path to traverse. The tool will then replace all Primeflex classes regarding the "Grid system" with TailwindCSS classes in all `*.component.html` files recursively. Any leading or trailing whitespace is removed from the HTML class attribute after replacement. E.g. `class=" grid "` will be replaced with `class="flex flex-wrap -mx-2 -mt-2"`, `class=" grid-nogutter"` with `class="mx-0 mt-0"`, etc. Prefixes like `sm:`, `md:`, `lg:`, `xl:` are preserved as well. E.g. `class="sm:col-2"` will be replaced with `class="sm:grow-0 sm:shrink-0 sm:p-2 sm:w-2/12"`.


