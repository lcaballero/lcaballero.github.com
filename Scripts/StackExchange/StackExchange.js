var authSuccess = null; // {accessToken, expirationDate, networkUsers}

function runSE_Answers() {
	// https://api.stackexchange.com/2.0/answers?order=desc&sort=activity&site=stackoverflow
	$.ajax({
		url: "https://api.stackexchange.com/2.0/answers?order=desc&sort=activity&site=stackoverflow",
		type: "GET",
		data: {},
		success: function (result) {
			console.info("success", result);
		},
		error: function (result) {
			console.info("error", result);
		}
	});
};

function runSE_auth() {
	SE.authenticate({
		success: function (data) {
			console.info("success", data);
			authSuccess = data;
		},
		error: function (data) {
			console.info("error", data);
		},
		scope: ['read_inbox'],
		networkUsers: true
	});
};

function runSE_Init() {

	console.log("runSE_Init");

	SE.init({
		clientId: 1,
		key: '123456',
		channelUrl: 'http://localhost/lcaballero.github.com/empty.html',
		complete: function (data) {
			console.info("complete", data);

			runSE_Answers();
		}
	});
};