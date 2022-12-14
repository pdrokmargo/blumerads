## Implementation component:

## 1) import component in the module of the parent component.

## 2) initialized tabsConfig property in parent component :
tabsConfig = TABS_CONFIG;

const TABS_CONFIG = [
  { widthCell: '150px', title: 'Cuenta', iconName: 'fa fa-sack-dollar', colorIcon: '#fff', disabled: false },
  { widthCell: '50%', title: 'Empresa', iconName: 'fa fa-business-time', colorIcon: '#fff', disabled: false },
  { widthCell: '120px', title: 'Bono', iconName: 'fa fa-money-check', colorIcon: '#fff', disabled: false },
  { widthCell: '110px', title: 'Disabled', iconName: 'fa fa-lock', colorIcon: '#fff', disabled: true }
]

Note: widthCell property is optional.

## 2) Use tag component.
<div class="col-12">
    <app-horizontal-tabs-wizard
    [horizontalTabConfig]="tabsConfig"
    (callBackHorizontalTabs)="switchTab($event)">
    </app-horizontal-tabs-wizard>
</div>

## 3) Declare selectedTab property initialized to 1 in parent component:
selectedTab = 1;

## 4) Create methodCallBack in parent component => Example: switchTab($event).
switchTab(event: { numberTab: number }): void {
    if (event) {
        this.selectedTab = event.numberTab;
    }
}

## 5) create ngSwitch in the parent component where the tab content will be rendered:
<div class="row">
    <div class="col-12" >
    <span [ngSwitch]="selectedTab">
        <div *ngSwitchCase="1">
        componente 1
        </div>
        <div *ngSwitchCase="2">
        componente 2
        </div>
        <div *ngSwitchCase="3">
        componente 3
        </div>
        <div *ngSwitchDefault>
        componente 4
        </div>
    </span>
    </div>
</div>

## Final html code parent compoent:
<div class="row">

<div class="col-12">
    <app-horizontal-tabs-wizard
    [horizontalTabConfig]="tabsConfig"
    (callBackHorizontalTabs)="switchTab($event)">
    </app-horizontal-tabs-wizard>
</div>

<div class="row">
    <div class="col-12" >
    <span [ngSwitch]="selectedTab">
        <div *ngSwitchCase="1">
        component 1
        </div>
        <div *ngSwitchCase="2">
        component 2
        </div>
        <div *ngSwitchCase="3">
        component 3
        </div>
        <div *ngSwitchDefault>
        component 4
        </div>
    </span>
    </div>
</div>

</div>
