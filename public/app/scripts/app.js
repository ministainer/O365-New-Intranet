/*
* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
*/

	(function () {
	angular.module('NewIntranetApp', [
    'ngRoute',
    'AdalAngular',
 	'angular-loading-bar'
  ])
	.config(config);
  
  // Configure the routes.
	function config($routeProvider, $httpProvider, adalAuthenticationServiceProvider, cfpLoadingBarProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainController',
				controllerAs: 'main'
			})
			.otherwise({
				redirectTo: '/'
			});
	
		// Initialize the ADAL provider with your clientID (found in the Azure Management Portal) and the API URL (to enable CORS requests).
		adalAuthenticationServiceProvider.init(
			{
				tenant:tenantId,
				clientId: clientId,
				// The endpoints here are resources for cross origin requests.
				endpoints: {
					'https://insightme.sharepoint.com/sites/pub/news':'https://insightme.sharepoint.com',
					'https://insightme.sharepoint.com/_api/':'https://insightme.sharepoint.com',
                    'https://insightme.sharepoint.com/sites/pub/news/PublishingImages/':'https://insightme.sharepoint.com',
                    'https://graph.microsoft.com': 'https://graph.microsoft.com'
				}
			},
			$httpProvider
			);
			
		// Remove spinner from loading bar.
    cfpLoadingBarProvider.includeSpinner = false;
	};	
})();

// *********************************************************
//
// O365-Angular-Microsoft-Graph-Connect, https://github.com/OfficeDev/O365-Angular-Microsoft-Graph-Connect
//
// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// *********************************************************
