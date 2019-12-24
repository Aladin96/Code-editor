$(document).ready(function() {

  // Calling Our Three Editors ( HTML, CSS, JS )

  var editorHtml = ace.edit("editorHtml"),
      editorCss = ace.edit("editorCss"),
      editorJs = ace.edit("editorJs");


// Defautl HTML

  let defautlHTML = `<!DOCTYPE html>
    <html>
      <head>
        <title></title>
      </head>
      <body>

      </body>
  </html>`;

  editorHtml.setTheme("ace/theme/twilight");

  editorHtml.session.setMode("ace/mode/html");

  editorHtml.focus();

  editorHtml.setShowPrintMargin();

  editorHtml.setValue(defautlHTML);

  // Defautl CSS

  let deafaultCSS = `body{

  }`;

  editorCss.setTheme("ace/theme/twilight");

  editorCss.session.setMode("ace/mode/css");

  editorCss.focus();

  editorCss.setShowPrintMargin();

  editorCss.setValue(deafaultCSS);

  // Defautl JS

  editorJs.setTheme("ace/theme/twilight");

  editorJs.session.setMode("ace/mode/javascript");

  editorJs.focus();

  editorJs.setShowPrintMargin();

  editorJs.setValue("document.getElementById('id');");

  // Theme Color

    // Mode DARK
  $(".dark").on("click", function(){

    $(this).data("active", "true");
    $(".light").data("active", "false")

    $("body").css( "background", "#2F3129" );

    $("h1, footer").css("color", "#FFF");

    // Change Color of The navs button
    $( ".nav-tabs .nav-link, .output" ).css({

      background: "#232323",
      color: "#6f716a"

    });

    // Change Theme Editor Code

    editorHtml.setTheme("ace/theme/twilight");
    editorCss.setTheme("ace/theme/twilight");
    editorJs.setTheme("ace/theme/twilight");

    // Active button

    if( $(this).data("active") == "true" ){

      $(".nav-tabs li > a").removeClass("activeLight");
      $(".nav-tabs li > a.active").addClass("activeDark");

          $(".nav-tabs .nav-link").on("click",function(){
            $(".nav-tabs li > a").removeClass("activeLight");
            $(this).addClass("activeDark");
          })
    }

  });

    // Mode LIGHT

  $(".light").on("click", function(){

    $(this).data("active", "true");
    $(".dark").data("active", "false")

    // Change Color Of The Body

    $("body").css({background:"#eee"});

    $("h1, footer").css("color", "#000");

    // Change Color of The navs button



    $( ".nav-tabs .nav-link, .output" ).css({

      background: "#dcdcdc",
      color: "#6f716a"

    });

    // Active button

    if( $(this).data("active") == "true" ){

      $(".nav-tabs li > a").removeClass("activeDark");
      $(".nav-tabs li > a.active").addClass("activeLight");

          $(".nav-tabs .nav-link").on("click",function(){

            $(".nav-tabs li > a").removeClass("activeDark");
            $(".nav-tabs li > a.active").removeClass("activeLight");
            $(this).addClass("activeLight");

          })
    }

    // Change Theme Editor Code

    editorHtml.setTheme( "ace/theme/textmate" );
    editorCss.setTheme( "ace/theme/textmate" );
    editorJs.setTheme( "ace/theme/textmate" );


  });


  // Run The Codes

  var iframe  =  document.getElementById("iframe").contentWindow.document,
      iframeDoc = document.getElementById("iframe").contentDocument;

  var htmlCodes="",
      cssCodes="",
      jsCodes="";


      // Get Value From each Editor

  editorHtml.getSession().on("change", function(){
     htmlCodes = editorHtml.getValue()
  });

  editorCss.getSession().on("change", function(){
     cssCodes = editorCss.getValue()
  });

  editorJs.getSession().on("change", function(){
     jsCodes = editorJs.getValue();
  });


    // Show The Results in The output

      $("#run").on("click", function(){

        var style = iframeDoc.createElement("style");
            style.textContent = cssCodes;

        var script = iframeDoc.createElement("script");
            script.textContent = jsCodes;

        iframe.open();
        iframe.write(htmlCodes);
        iframe.close();

        iframeDoc.head.appendChild(style);
        iframeDoc.body.appendChild(script);
      })


});
