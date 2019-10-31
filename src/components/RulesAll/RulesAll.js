import React from 'react';

const RulesAll = ({ display, start }) => (
  <div style={{ display: display ? 'none' : 'block' }}>
    <p>In this game mode, the streamers and the chat compete in rounds.</p>

    <p>The streamer selects the answer, and the chat answers in the chat by using the command "!answer" followed by the number of the answer.</p>
    
    <p>For example, to answer with the first choice, simply type <em>"!answer 1"</em></p>

    <p>The answer with the highest percent of vote from chat will be selected.<br /></p>

    <p>To prevent the streamer from cheating, the answer from chat will remain blurred until the countdown is over. That way, the streamer won't be able to see what chat has answered until it's too late.</p>

    <p>Of course, we <em>strongly</em> recommand chat to <em>NOT</em> use Google. And we recommand the streamer to close his chat during the game. It's funnier for everyone that way !</p>

    <p>Click on the "Start" button whenever you (and the chat) are ready.</p><br />
    <button onClick={start}>Start</button>
  </div>
);

export default RulesAll;
