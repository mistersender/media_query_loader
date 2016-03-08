# Media Query Loader

This is a simple js snippet that will allow css files to load only when needed based on a media query. Now, instead of all the files loading immediately, as is default browser behavior, files will only load as they are needed, saving valuable bandwidth over mobile especially.

The file is tiny, less than 0.4kB, it could easily be included directly in the source.

To use, simply change links in the `head` of your site to use `data-` attributes for the `href` & `media`, and the loader afterwards.

```html
<link rel="stylesheet" href="css/test.css">
<link rel="stylesheet" data-href="css/test@400.css" data-media="(min-width: 400px)">
<link rel="stylesheet" data-href="css/test@600.css" data-media="(min-width: 600px)">
<script src="media_query_loader.min.js"></script>
```

[A fully functioning example is in the `example` folder](example/index.html).

## Support
All modern browsers, ie9+
