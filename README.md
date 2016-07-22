# Install
```
bower install angular-j-auto-complete --save
```

# Usage
```
link(rel='stylesheet', href='/lib/angular-auto-complete/dist/stylesheets/auto-complete.css')
script(type="text/javascript", src="/lib/jquery/dist/jquery.min.js")
script(type="text/javascript", src="/lib/devbridge-autocomplete/dist/jquery.autocomplete.min.js")
script(type="text/javascript", src="/lib/angular-auto-complete/dist/scripts/app.js")

input(type="text", placeholder="公司名称", ng-model="checkInData.companyName", ng-required="true", auto-complete, datasource="availableCompanyNames", min-chars="0")
```

# Contribution Notice
Run `gulp` after source change to update dist folder
```
gulp
```