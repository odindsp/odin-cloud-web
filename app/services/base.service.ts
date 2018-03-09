import { Injectable } from "@angular/core";
import { Headers, Http, Response, URLSearchParams,RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "../resources/request.js";
declare var profiles;

@Injectable()
export class BaseService {

	public baseUrl: string = "";

	public tokenType: string;

	public token: string;

	public headers: Headers;

	public tokens: string;

	public requestOptions: Object;

	constructor(
		protected http: Http
	) {}

	public getBaseUrl(){
		return eval(profiles + ".urlHref");
	}

	public getHeadOptions(){
		this.tokenType = window.localStorage.getItem("tokenType");
		this.token = window.localStorage.getItem("token");
		this.tokens = this.tokenType + " " + this.token;
		this.headers = new Headers({"Content-Type":"application/json","Authorization":this.tokens});
		this.requestOptions = new RequestOptions({ headers: this.headers,withCredentials:true});
		return profiles === "rap" ? undefined : this.requestOptions;
	}

	public create(options){
		return this.http.post(this.baseUrl, options,this.getHeadOptions()).map(this.extractData).catch(this.handleError);
	}

	public list(options?){
		let params = new URLSearchParams();
		if(options){
            for(let key in options){
                params.set(key, options[key]);
            }			
        }
		return this.http.get(this.baseUrl +"s"+ (options ? "?"+ params.toString() : ""),this.getHeadOptions()).map(this.extractData).catch(this.handleError);
	}

	public delete(ids){
		return this.http.delete(this.baseUrl +"s"+ "?ids=" + ids,this.getHeadOptions()).map(this.extractData).catch(this.handleError);
	}

	public get(id: string){
		return this.http.get(this.baseUrl +"/"+ id,this.getHeadOptions()).map(this.extractData).catch(this.handleError);
	}

	public update(id: string, options){
		return this.http.put(this.baseUrl + "/" + id, options,this.getHeadOptions()).map(this.extractData).catch(this.handleError);
	}

	public status(id: string, statusObj){
		return this.http.put(this.baseUrl + "/status/" + id, statusObj,this.getHeadOptions()).map(this.extractData).catch(this.handleError);
	}

	public extractData(res: Response) {
		let body = {
			head: { httpCode: res.status },
			body: res.json()
		};
		return body || { };
	}

	public handleError(error: Response | any) {
		if(error.status == 401){
			console.clear();
			window.location.href = "#/login";
		}
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || "";
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		if(error.status != 401){
			console.error(errMsg);
		}	
		let errObj = {
			status: error.status,
			code:error.json().code,
			message: error.json().message
		}
		return Observable.throw(errObj);
	}
}