<script type="text/javascript">
    var disqus_shortname  = 'praveenkumarsrinivasan',
        disqus_identifier = '{{ page.path | split:'/' | last | cgi_escape }}',
        disqus_url        = '{{ site.url }}{{ page.url | uri_escape }}'
    ;
    (function() {
        var load = function(src){
            var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = src;
            var e = document.getElementsByTagName('script')[0]; e.parentNode.insertBefore(s, e);
        };
        load('//' + disqus_shortname + '.disqus.com/count.js');
        if (document.getElementById('disqus_thread')) {
            load('//' + disqus_shortname + '.disqus.com/embed.js');
        }
    })();
</script>

