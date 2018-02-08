var $wrapper = $('#container');
var $brickButton = $('.sigle');

var $destroyButton = $('#destroy-button');
var $createButton = $('#create-button');

// TEMPLATES

var $brickTemplate = $('<article></article>').addClass('brick');
var $buttonTemplate = $('<input type="button" value="Destroy" />').addClass('button single');

// FUNCTIONS

var $createBrick = function ()
{
	var $newBrick = $brickTemplate.append($buttonTemplate).clone();

	$wrapper.append($newBrick);

	setTimeout(function ()
	{
		$newBrick.addClass('visible');
	}, 10);
};

var $destroyBrick = function ($brick)
{
	$brick.addClass('destroyed');

	// transitionDuration

	setTimeout(function ()
	{
		$brick.addClass('removed');

		setTimeout(function ()
		{
			$brick.remove();
		}, 1000);
	}, 1000);
};

var $destroyAllBricks = function ()
{
	$wrapper.empty();
};

// EVENTS
$destroyButton.on('click', $destroyAllBricks);

$createButton.on('click', $createBrick);

$wrapper.on('click', '.single', function(){
	$destroyBrick($(this).parent());
});
