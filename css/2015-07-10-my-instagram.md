---
layout:           post
title:            test
resource:         true
author:           praveen
categories:       [pics_n_videos, pics]
tags:             [pics, photostream]
---

## Instagram Feed

<div style="margin:auto; max-width:700px;">
    <div id="instagram_feed"></div>
</div>

<script type="text/javascript" src="https://raw.githubusercontent.com/stevenschobert/instafeed.js/master/instafeed.min.js"></script>


<script type="text/javascript">
    var feed = new Instafeed({
        get: 'user',
        clientId: 'a94c2ae0ad034899bf52977b49d936d4'
    });
    feed.run();
</script>

