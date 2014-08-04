---
permalink:         /movies_n_music/
layout:            page
title:             Movies n Music
---

{% for cat in site.movies_n_music %}
## Blogs under `{{ cat }}`
<ul>
    {% for post in site.posts %}
        {% if post.resource == true %}
            {% for pc in post.categories %}
                {% if pc == cat %}
                    <li>
                        <a href="{{ post.url }}">{{ post.title }}</a>
                        <br/>
                        <span class="post-date">{{ post.date | date_to_string }} |
                        {% capture readtime %}{{ post.content | number_of_words | plus:91 | divided_by:180 }}{% endcapture %}
                        {% if readtime == '0' %} &lt; 1{% else %}{{ readtime }}{% endif %} min. read |
                        <a href="{{ post.url }}#disqus_thread" data-disqus-identifier="{{ post.path | split:'/' | last | cgi_escape }}">View Comments</a>
                        </span>
                        <span class="post-excerpt">{{ post.excerpt | strip_html }} &hellip; (<a href="{{ post.url }}">Read More</a>)</span>
                    </li>
                {% endif %} <!-- cat-match-p -->
            {% endfor %} <!-- post-category -->
        {% endif %} <!-- resource-p -->
    {% endfor %}
</ul>
{% endfor %}

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

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-52928744-2', 'auto');
  ga('send', 'pageview');

</script>

