(function() {

	function appStateFlag(name) {
		return Ember.computed(function() {
			var appState = App.router.currentState;
			while (appState) {
				if (appState.name === name)
					return true;
				appState = appState.get('parentState');
			}
			return false;
		}).property('App.router.currentState');
	}

	window.App = Ember.Application.create({
		ApplicationController : Ember.Controller.extend({
			isHome : appStateFlag('home'),
			isAbout : appStateFlag('about'),
			isContact : appStateFlag('contact'),
			isBlog : appStateFlag('blog')
		}),

		ApplicationView : Ember.View.extend({
			templateName : 'application'
		}),

		HomeController : Ember.Controller.extend(),
		HomeView : Ember.View.extend({
			templateName : 'home'
		}),
		
		AboutController : Ember.Controller.extend(),
		AboutView : Ember.View.extend({
			templateName : 'about'
		}),
		
		ContactController : Ember.Controller.extend(),
		ContactView : Ember.View.extend({
			templateName : 'contact'
		}),
		
		BlogController : Ember.Controller.extend(),
		BlogView : Ember.View.extend({
			templateName : 'blog'
		}),

		Router : Ember.Router.extend({
			root : Ember.Route.extend({
				doHome : function(router, event) {
					router.transitionTo('home');
				},
				doAbout : function(router, event) {
					router.transitionTo('about');
				},
				doContact : function(router, event) {
					router.transitionTo('contact');
				},
				doBlog : function(router, event) {
					router.transitionTo('blog');
				},
				home : Ember.Route.extend({
					route : '/',
					connectOutlets : function(router, event) {
						router.get('applicationController').connectOutlet(
								'home');
					}
				}),
				about : Ember.Route.extend({
					route : '/about',
					connectOutlets : function(router, event) {
						router.get('applicationController').connectOutlet(
								'about');
					}
				}),
				contact : Ember.Route.extend({
					route : '/contact',
					connectOutlets : function(router, event) {
						router.get('applicationController').connectOutlet(
								'contact');
					}
				}),
				blog : Ember.Route.extend({
					route : '/blog',
					connectOutlets : function(router, event) {
						router.get('applicationController').connectOutlet(
								'blog');
					}
				}),

			})
		})
	});

	$(function() {
		App.initialize();
	});
})();
