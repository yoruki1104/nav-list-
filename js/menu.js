$(document).ready(function() {
    $(".hamberger").click(function() {
      $(".menu").toggleClass("menu-active");
      $(".hamberger .top").toggleClass("hamberger-top");
      $(".hamberger .center").toggleClass("hamberger-center");
      $(".hamberger .bottom").toggleClass("hamberger-bottom");
    });
  });
  
  $(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
    }	
    var accordion = new Accordion($('#accordion'), false);
});