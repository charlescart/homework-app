## Tareas Pendientes [TO DO y DO]

instalar paquetes con:<br>

`npm install`

Comandos:<br>
- Listar tareas:
```
app list

homework list

Opciones:
  --help  Muestra ayuda                                               [booleano]
```
- Crear una tarea
```
app create

create homework to do

Opciones:
  --help             Muestra ayuda                                    [booleano]
  --description, -d  name of homework         [cadena de caracteres] [requerido]
  --complete, -c     mark as completed               [booleano] [defecto: false]
```
- Actualizar una tarea:

```
app update

update homework to do

Opciones:
  --help          Muestra ayuda                                       [booleano]
  --task, -t      id of task                                [número] [requerido]
  --complete, -c  mark as completed                  [booleano] [defecto: false]
  --destroy, -d   delete a task                      [booleano] [defecto: false]
```

- Eliminar una tarea
```
app destroy

destroy homework

Opciones:
  --help      Muestra ayuda                                           [booleano]
  --task, -t  delete a task                                 [número] [requerido]
```