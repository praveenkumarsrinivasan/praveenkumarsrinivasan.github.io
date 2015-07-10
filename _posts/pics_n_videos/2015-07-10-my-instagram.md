---
layout:           post
title:            Instagram Feed
resource:         true
author:           praveen
categories:       [pics_n_videos, pics]
tags:             [pics, photostream]
---

## Instagram Feed

<div style="margin:auto; max-width:700px;">
    <div id="instafeed"></div>
</div>

<style>
#instafeed a{
    display: inline-block;
    padding: 5px;
}
</style>
<script type="text/javascript" src="/js/nanoGallery/third.party/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="/js/instafeed.min.js"></script>

<script type="text/javascript">
/*
    var feed = new Instafeed({
        clientId: 'a94c2ae0ad034899bf52977b49d936d4',
        accessToken: '428869471.cf0499d.d8a5f0bf44424f1a970d2725c8d12450',
        get: 'user',
        userId: '428869471',
        userId: 'praveen_sxi',
    });
    feed.run();
*/

    var userFeed = new Instafeed({
        get: 'user',
        userId: 428869471,
        limit: 60,
        accessToken: '428869471.cf0499d.d8a5f0bf44424f1a970d2725c8d12450',
    });
    userFeed.run();

</script>

