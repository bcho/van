(function () {
    var $commandPrompt = $('.editor-command-prompt'),
        commandPromptCommandText = $('.command-prompt-state-command').text(),
        commandPromptNormalText = $('.command-prompt-state-normal').text(),
        commandPromptInsertText = $('.command-prompt-state-insert').text();

    Mousetrap.bind(':  h e l p', function () {
        location.href = 'help.html';
    });

    Mousetrap.bind(': p r o g r a m', function () {
        location.href = 'program.html';
    });

    Mousetrap.bind(': g i t h u b', function () {
        location.href = 'https://github.com';
    });

    Mousetrap.bind(': c o d e r w a l l', function () {
        location.href = 'https://coderwall.com';
    });

    Mousetrap.bind(': q', function () {
        window.open('', '_self').close();
    });

    Mousetrap.bind('shift+;', function () {
        $commandPrompt.text(commandPromptCommandText);
    });

    Mousetrap.bind('esc', function () {
        $commandPrompt.text(commandPromptNormalText);
    });
})();
