import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HelloComponent} from "./app.component";

@NgModule({
    bootstrap:    [HelloComponent],
    declarations: [HelloComponent],
    imports:      [BrowserModule, FormsModule ],
})
export class AppModule {}