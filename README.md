## CSS migration tool from Primeflex to TailwindCSS

### This tool is meant for Angular projects that use the Primeflex "Grid system". It should be used before the CSS migration using `primeclt pf2tw` as otherwise the class names will already be renamed and then likely not be found. It processes the raw file string so beware of using the Primeflex class names anywhere outside the HTML class attribute.
### How to use:
- install the package
```
npm i css-grid-pf2tw
```
- run the `migrate` command
```
npx css-grid-pf2tw migrate
```
You wil be prompted to enter the file path to traverse. The tool will then replace all Primeflex classes regarding the "Grid system" with TailwindCSS classes in all `*.component.html` files recursively. E.g. `grid` will be replaced with `flex flex-wrap -mx-2 -mt-2`, `grid-nogutter` with `mx-0 mt-0`, etc. Prefixes like `sm:`, `md:`, `lg:`, `xl:` are preserved as well. E.g. `sm:col-2` will be replaced with `sm:grow-0 sm:shrink-0 sm:p-2 sm:w-2/12`.


