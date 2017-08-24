import * as $ from "jquery";
import msg from "./contents";
import "./message.scss";

$(() => {

    $("<div id='message'>")

        .text(msg + "!")
        .appendTo("body");
});
