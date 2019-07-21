import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $("i.icon").click(function() {
        $(".nav-list").slideToggle();
      });
    });
    $(document).ready(function() {
      $(window).scroll(function() {
        let sc = $(this).scrollTop();
        if (sc > 100) {
          $("header").addClass("sticky");
        } else {
          $("header").removeClass("sticky");
        }
        /* if (sc > 2462) {
          $(".timer").countTo();
        }*/
      });

      //$(".timer").countTo();
      // console.log($(".stat").offset().top);

      //portofolio buttton change bg
      $(".buttons button").click(function() {
        $(this)
          .addClass("active_btn")
          .siblings()
          .removeClass("active_btn");

        let filter = $(this).attr("id");
        //console.log(filter);
        if (filter === "all") {
          //to show all images
          $(".Images > div").fadeIn();
        } else {
          //to hide all images
          $(".Images > div").fadeOut();
          // show only what i clicked on
          $(".Images ")
            .contents()
            .filter("." + filter)
            .fadeIn();
        }
      });
    });
  }

}
