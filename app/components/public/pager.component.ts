import { Component, OnInit, Output, EventEmitter, Input,ViewChild } from "@angular/core";
import { MyModalService } from "../../services/myModal.service";
import { ChineseService } from "../../services/chinese.service";

@Component({
	selector: "ng-pager",
	template: `
		<div class="height50 line-height50 flex-start-center">
			<div class="flex-base">
				<label *ngIf="isAllcheck" class="hover line-height38 height38">
					<input class="from-control" type="checkbox" (change)="allChange()" [(ngModel)]="allCheck" class="mb2">全选
				</label>
				<span class="hover line-height38 height38" *ngIf="isAllcheck" (click)="deletes()">删除</span>
			</div>
			<div *ngIf="total>0">{{ "共 "+total+" 条" }}</div>
            <div>每页显示</div>
			<div *ngIf="total>10" class="flex-base rel">
				<select class="form-control height38" [(ngModel)]="pageSize" (change)="update()">
					<option [ngValue]="10">10</option>
					<option [ngValue]="15">15</option>
					<option [ngValue]="20">20</option>
				</select>
			</div>	
			<div>条</div>
		</div>
    `
})

export class PagerComponent implements OnInit {

	

	@Output() outer: EventEmitter<any> = new EventEmitter();

	@Output() allChangeOuter: EventEmitter<any> = new EventEmitter();

	@Output() deleteOuter: EventEmitter<any> = new EventEmitter();

    @Input() pageNo;

    @Input() pageSize;

    @Input() total;

	@Input() allCheck: boolean;

	@Input() selected: Array<any>;

	@Input() isAllcheck: boolean;


	constructor(
		private myModalService: MyModalService,
		private chineseService: ChineseService
	) {}

	private columns;

	private price: number;

	ngOnInit() {

	}
    private update(): void{
        this.outer.emit(this.pageSize);
    }

	private allChange(): void{
		this.allChangeOuter.emit(this.allCheck);
	}

	private deletes(): void{
		this.deleteOuter.emit();
	}
}