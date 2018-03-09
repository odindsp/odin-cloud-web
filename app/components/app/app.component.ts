import { Component,OnInit } from "@angular/core";
import { Router,ActivatedRoute } from "@angular/router";
import { PublicService } from "../../services/public.service";
import { ChineseService } from "../../services/chinese.service";

declare var $;
declare var require;
let path = require("./app.html");

@Component({
	selector: "ng-app",
	template: path
})

export class AppComponent implements OnInit {

	private datas = [];

	private page = {
		pageNo: 0,
		pageSize: 10,
		total:15
	}

	private startDate: number = new Date().getTime();

	private endDate: number = new Date().getTime();

	constructor(
		private publicService: PublicService,
		private chineseService: ChineseService
	) {}

	ngOnInit() {
		for(let i = 0;i < 15;i++){
			this.datas.push({
				name: "呵呵哒",
				id: "123123fdsafdasfdsa",
				adx: "汽车之家"
			});
		}
		this.publicService.timeRangePickerSet("timeRangePicker",{
			locale: this.chineseService.config.TIMERANGEPICKER_CONFIG
		},(start,end) => {
			console.log(start._d.getTime())
			console.log(end._d.getTime())
		})
	}
	
}