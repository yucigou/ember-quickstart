import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return ['Bill Gates', 'Qijun Yang', 'Xiaolong Ma'];
	}
});
