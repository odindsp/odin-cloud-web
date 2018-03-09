import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { FileUploadModule,FileSelectDirective } from "ng2-file-upload";
// 组件引入
import { AppComponent } from "./components/app/app.component";
// 指令引入
import { CutStringDirective } from "./directives/cutString.directives";
import { ValidationDirective } from "./directives/validation.directives";
// 服务引入
import { ValidationService } from "./services/validation.service";
import { BaseService } from "./services/base.service";
import { AppService } from "./services/app.service";
import { MyModalService } from "./services/myModal.service";
import { ChineseService } from "./services/chinese.service";
import { PublicService } from "./services/public.service";

export const childRoutes: Routes = [
	{ path: "" , redirectTo: "home/app", pathMatch: "full" },
	{ 
		path: "",
		children: [
			{ path: "app", component:AppComponent }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(childRoutes),
		NgxDatatableModule,
		FormsModule,
		CommonModule,
		FileUploadModule
	],
	declarations: [
		// 组件
		AppComponent,
		// 指令
		CutStringDirective,
		ValidationDirective
	],
	providers: [
		// 服务
		ValidationService,
		BaseService,
		AppService,
		MyModalService,
		ChineseService,
		PublicService
	],
	exports: [ RouterModule ]
})

export class RoutingModule {

}