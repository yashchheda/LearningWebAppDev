var main = function () {
    var toDos = ["Get groceries",
                 "Make up some new ToDos",
                 "Prep for Monday's class",
                 "Answer emails",
                 "Take Gracie to the park",
                 "Finish writing this book"];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                // newest first, so we have to go through
                // the array backwards
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                // oldest first, so we go through the array forwards
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                // input a new to-do
                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });

                $content = $("<div>").append($input).append($button);
               /* Alternatively append() allows multiple arguments so the above
                can be done with $content = $("<div>").append($input, $button); */
            }
			else if ($element.parent().is(":nth-child(4)")) {
				$content = $("<div style='width:700px;'>");
				$content.append('<p style="margin-bottom:15px;background:none;"><a class="group4" style="margin:10px 15px;"  href="images/amazeriffic1.png" title=""><img src="images/amazeriffic1.png" width="300" height="200"/></a> <a class="group4" style="margin:10px 15px;" href="images/amazeriffic2.png" title=""><img src="images/amazeriffic2.png" width="300" height="200"/></a></p>');
				$content.append('<p style="margin-top:15px;background:none;"><a class="group4" style="margin:10px 15px;"  href="images/amazeriffic3.png" title=""><img src="images/amazeriffic3.png" width="300" height="200"/></a> <a class="group4"  style="margin:10px 15px;"href="images/amazeriffic4.png" title=""><img src="images/amazeriffic4.png" width="300" height="200"/></a></p>');
				$content.on("click", function () {
				$("a.group4").colorbox({rel:'group4', slideshow:true, open:true});
				});
			}

            $("main .content").append($content);

            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);
