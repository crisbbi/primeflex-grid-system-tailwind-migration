## CSS migration tool from Primeflex to TailwindCSS for Angular projects regarding the Primeflex "Grid system".

### How to use:
- install the package
```
npm i css-grid-pf2tw
```
- run the `migrate` command
```
npx css-grid-pf2tw migrate
```
you wil be prompted to enter the file path to traverse. The tool will then replace all Primeflex classes regarding the "Grid system" with TailwindCSS classes in all `*.component.html` files recursively. E.g. `grid` will be replaced with `flex flex-wrap -mx-2 -mt-2`, `grid-nogutter` with `mx-0 mt-0`, etc. Prefixes like `sm:`, `md:`, `lg:`, `xl:` are preserved as well. E.g. `sm:col-2` will be replaced with `sm:grow-0 sm:shrink-0 sm:p-2 sm:w-2/12`.


