import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HelloComponent} from "./app.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports:      [BrowserModule, FormsModule ], // import Angular's BrowserModule
    bootstrap:    [HelloComponent],  // indicate the bootstrap component
    declarations: [HelloComponent] // register our component with the module
})
export class AppModule {}
