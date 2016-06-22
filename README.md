# Usage
```
link(rel='stylesheet', href='/stylesheets/auto-complete.css')
script(type="text/javascript", src="/lib/jquery/dist/jquery.min.js")
script(type="text/javascript", src="/lib/devbridge-autocomplete/dist/jquery.autocomplete.min.js")
script(type="text/javascript", src="/lib/angular-auto-complete/public/scripts/app.js")

input(type="text", placeholder="公司名称", ng-model="checkInData.companyName", ng-required="true", auto-complete, datasource="availableCompanyNames")
```