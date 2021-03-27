const work = document.getElementById('work');

dev = 'DEVELOPER';
free = 'FREELANCER';
setInterval(() => {
  inner = work.innerHTML;
  if (inner == dev) {
    work.innerHTML = free;
  } else if (inner == free) {
    work.innerHTML = dev;
  }
}, 5000);



function() {
  var a, t, i = 2500, s = 660, o = 1500;
  function n(e) {
      var a = function(e) {
          return e.is(":last-child") ? e.parent().children().eq(0) : e.next()
      }(e);
      e.parents(".cd-headline").hasClass("clip") && e.parents(".cd-words-wrapper").animate({
          width: "2px"
      }, s, (function() {
          var t;
          t = a,
          e.removeClass("is-visible").addClass("is-hidden"),
          t.removeClass("is-hidden").addClass("is-visible"),
          function(e, a) {
              e.parents(".cd-headline").hasClass("clip") && e.parents(".cd-words-wrapper").animate({
                  width: e.width() + 10
              }, s, (function() {
                  setTimeout((function() {
                      n(e)
                  }
                  ), o)
              }
              ))
          }(a)
      }
      ))
  }
  a = e(".cd-headline"),
  t = i,
  a.each((function() {
      var a = e(this);
      if (a.hasClass("clip")) {
          var i = a.find(".cd-words-wrapper")
            , s = i.width() + 10;
          i.css("width", s)
      }
      setTimeout((function() {
          n(a.find(".is-visible").eq(0))
      }
      ), t)
  }
  ))
}()