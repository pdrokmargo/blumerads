#Implementation component:

## 1) import component in the module of the parent component.



2)
<app-generic-modal
    [modalId]="'modalGeneric1'"
    [titleModal]="'¿Estas seguro que deseas eliminar?'"
    [subtitle]="'Ten en cuenta que un vez que elimines tu publico, perderas toda la informacion'"
    [titlePrimaryBtn]="'Aceptar'"
    [titleSecundaryBtn]="'Cancelar'"
    [showSecundaryBtn]="true"
    (callBackModal)="callBack($event)">
</app-generic-modal>

##  3) configurar data-bs-target="#modalGeneric1" con el nombre del id del modal
<button
    class="btn btn-primary-blumer btn-sm px-10"
    data-bs-toggle="modal" data-bs-target="#modalGeneric1">
    Crear campaña guiada
  </button>

## 4) crear metodo para escuchar los eventos del callback del modal, en el componente padre.

callBack(event: any): void {
    console.log('CALL BACK: ', event);
    if(event.hasCancel){
      //Ejecutar codiog al cancelar
    }
    if(event.hasSend){
      //Ejecutar codigo al aceptar  cuando hay 2 botones
    }
    if(event.accept){
      //Ejecutar codigo al aceptar cuando es 1 solo boton,
    }
  }
