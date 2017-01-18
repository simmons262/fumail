import Ember from 'ember';

let messages = {
	options: {
		categories:[
			{name:"funny", options: [{name: "You're an ass", value: "00"}, {name: "I do not like you", value: "01"}]},
			{name:"vulgar", options: [{name: "F*** You", value: "10"}, {name: "Suck it, whore", value: "11"}]},
			{name:"mean", options: [{name: "You're fat and you have body odor", value: "20"}, {name: "You suck", value: "21"}]},
		]
	}
};

export default Ember.Route.extend({
	model() {
		return messages;
	}
});
