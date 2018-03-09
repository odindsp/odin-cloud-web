import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { EntryModule } from "./entry.module";
import "moment/moment.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "daterangepicker/daterangepicker.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "daterangepicker/daterangepicker.js";
import "./styles/reset.less";
import "./styles/style.less";
import "./styles/common.less";
import "./styles/datatable.less";
import "./styles/table.less";
import "./styles/public.less";
platformBrowserDynamic().bootstrapModule(EntryModule);