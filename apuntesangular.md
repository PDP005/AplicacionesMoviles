# Angular
## Pasos
1. Crear un proyecto  
    `ng new nombre-de-la-app`
2. Organizar (carpetas de servicios, interfaces, componentes y subcarpetas)
3. Crear componentes  
    `ng generate component carpetas/componente`  
    `ng g c carpetas/componentes`
4. Crear modulo (opcional)
    `ng g m nombre-modulo`
    - En el módulo:
        - declarations: [Componentes]
        - imports: [Paquetes de angular que usan tus componentes i.e RouterModule o CommonModule]
        - exports. [Componentes utilizados por componentes fuera del módulo]
        - también hay que exportar el módulo: `export class NombreModule{}`
    - Si el componente es parte de un módulo, ya no es standalone:
        -Quitamos la línea de imports:[] en el archivo .ts del componentes y cambiamos el valor de standalone a `false`
5. Rutas
    - Entrar en app.routes.ts
    `{path: 'nombre-de-ruta', component:nombre-de-componente}`
    - Para rutas parametrizadas(RouterLink): `{path: 'nombre-de-ruta/:parámetro', component:nombre-de-componente}`
    - En tu app.component.html, agregar un elemento: `<router-outlet></router-outlet>`
    - En imports de app.component.ts: `import {RouterOutlet} from ...` o `import {RouterModule}`
    - En los componentes donde usas el atributo `routerLink`, importar en el .ts del componente o su módulo: `import {RouterLink} from ...` o `import {RouterModule}`
6. Servicios
    `ng g s carpetas/nombre-de-servicio`
    - Caso 1: datos hardcoded (los datos están escritos en el propio servicio)
    - Caso 2: datos en un json
        - en el constructor del servicio, hay que inyectar `private http:HttpClient`
        - declarar una función de fetch o get con el sintaxis:  
            ```
                public get(): Observable<IDatos[]>{ //observable es algo suyo
                    return this.http.get<IDatos[]>{'archivo.json'}
                }
            ```
        - en el archivo app.config.ts, en el campo de "providers": `provideHTTPClient()`
    - Caso 3: datos en un API
        - en vez del archivo json en la función de fetch o get, ponemos la ruta al api i.e http://jsonplaceholder.typicode.com/comments
7. Rellenar componentes
    - Si quieres rellenar un componente, tenemos que sacar los datos y guardarlos en un array:
    ```
        //Declarar una variable con tipo IDatos

        lista:IDatos[]=[]

        constructor(private variable:NombreServicio){}

        ngOnInit(){
            this.lista.get().subscribe(
                array_datos => {
                    array_datos.forEach(
                        data => {
                            this.lista.push(data)
                        }
                    )
                }
            )
        }
    ```

    - Para mostrar VARIOS OBJETOS que cumplan CONDICIONES ESPECÍFICAS:
    ```
        ngOnInit(){
            this.lista.get().subscribe(
                array_datos => {
                    const datosFiltrados = array_datos.filter(
                        data => {
                            data.id === numericId
                        }
                    );
                    this.lista.push(...datosFiltrados);
                }
            )
        }
    ```

    - Para mostrar los datos, utilizamos el directivo *ngFor de angular: `*ngFor="let l of lista (lista declarada en el .ts)"`
    - Para llamar los datos:
        - Atributo: `[atributo]=l.propiedad`
        - InnerHTML: `{{l.propiedad}}`

    - Para mostrar SOLO UNO (normalmente mediante rutas parametrizadas):
    ```
        objeto: IDato | undefined

        ngOnInit(): void {
            let id = this.route.snapshot.paramMap.get('parámetro-puesto-en-la-ruta');
            let numericId =  Number(id) ; //En este caso el parámetro es un ID numérico, este paso sólo sirve para parsear a número
            this.variable.get().subscribe(
            lista=>{
                this.objeto=lista.find(x=>x.id==numericId); //x.id significa id guardado en el objeto dentro del json, no la id que pasamos como parámetro. Eso está guardado en numericID
                }
            );
        }
    ```

    - Usar el directivo *ngIf de angular para esperar la devolución del dato: `*ngIf="objeto"`

- HAY QUE ACTUALIZAR IMPORTS DESPUES DE CADA PASO
    ```
        CommonModule
        RouterModule
        