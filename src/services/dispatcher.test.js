define(
  [ "src/services/dispatcher" ],
  function( Dispatcher, createKeyboardEvent ) {
    return function() {

      var keyCodes = [
        ['BACK', 0x08],
        ['TAB', 0x09],
        ['CLEAR', 0x0C],
        ['RETURN', 0x0D],
        ['SHIFT', 0x10],
        ['CONTROL', 0x11],
        ['MENU', 0x12],
        ['PAUSE', 0x13],
        ['CAPITAL', 0x14],
        ['KANA', 0x15],
        ['HANGUL', 0x15],
        ['JUNJA', 0x17],
        ['FINAL', 0x18],
        ['HANJA', 0x19],
        ['KANJI', 0x19],
        ['ESCAPE', 0x1B],
        ['CONVERT', 0x1C],
        ['NONCONVERT', 0x1D],
        ['ACCEPT', 0x1E],
        ['MODECHANGE', 0x1F],
        ['SPACE', 0x20],
        ['PRIOR', 0x21],
        ['NEXT', 0x22],
        ['END', 0x23],
        ['HOME', 0x24],
        ['LEFT', 0x25],
        ['UP', 0x26],
        ['RIGHT', 0x27],
        ['DOWN', 0x28],
        ['SELECT', 0x29],
        ['PRINT', 0x2A],
        ['EXECUTE', 0x2B],
        ['SNAPSHOT', 0x2C],
        ['INSERT', 0x2D],
        ['DELETE', 0x2E],
        ['HELP', 0x2F],
        ['0', 0x30],
        ['1', 0x31],
        ['2', 0x32],
        ['3', 0x33],
        ['4', 0x34],
        ['5', 0x35],
        ['6', 0x36],
        ['7', 0x37],
        ['8', 0x38],
        ['9', 0x39],
        ['A', 0x41],
        ['B', 0x42],
        ['C', 0x43],
        ['D', 0x44],
        ['E', 0x45],
        ['F', 0x46],
        ['G', 0x47],
        ['H', 0x48],
        ['I', 0x49],
        ['J', 0x4A],
        ['K', 0x4B],
        ['L', 0x4C],
        ['M', 0x4D],
        ['N', 0x4E],
        ['O', 0x4F],
        ['P', 0x50],
        ['Q', 0x51],
        ['R', 0x52],
        ['S', 0x53],
        ['T', 0x54],
        ['U', 0x55],
        ['V', 0x56],
        ['W', 0x57],
        ['X', 0x58],
        ['Y', 0x59],
        ['Z', 0x5A],
        ['LWIN', 0x5B],
        ['RWIN', 0x5C],
        ['APPS', 0x5D],
        ['SLEEP', 0x5F],
        ['NUMPAD0', 0x60],
        ['NUMPAD1', 0x61],
        ['NUMPAD2', 0x62],
        ['NUMPAD3', 0x63],
        ['NUMPAD4', 0x64],
        ['NUMPAD5', 0x65],
        ['NUMPAD6', 0x66],
        ['NUMPAD7', 0x67],
        ['NUMPAD8', 0x68],
        ['NUMPAD9', 0x69],
        ['MULTIPLY', 0x6A],
        ['ADD', 0x6B],
        ['SEPARATOR', 0x6C],
        ['SUBTRACT', 0x6D],
        ['DECIMAL', 0x6E],
        ['DIVIDE', 0x6F],
        ['F1', 0x70],
        ['F2', 0x71],
        ['F3', 0x72],
        ['F4', 0x73],
        ['F5', 0x74],
        ['F6', 0x75],
        ['F7', 0x76],
        ['F8', 0x77],
        ['F9', 0x78],
        ['F10', 0x79],
        ['F11', 0x7A],
        ['F12', 0x7B],
        ['F13', 0x7C],
        ['F14', 0x7D],
        ['F15', 0x7E],
        ['F16', 0x7F],
        ['F17', 0x80],
        ['F18', 0x81],
        ['F19', 0x82],
        ['F20', 0x83],
        ['F21', 0x84],
        ['F22', 0x85],
        ['F23', 0x86],
        ['F24', 0x87],
        ['NUMLOCK', 0x90],
        ['SCROLL', 0x91],
        ['LSHIFT', 0xA0],
        ['RSHIFT', 0xA1],
        ['LCONTROL', 0xA2],
        ['RCONTROL', 0xA3],
        ['LMENU', 0xA4],
        ['RMENU', 0xA5],
        ['BROWSER_BACK', 0xA6],
        ['BROWSER_FORWARD', 0xA7],
        ['BROWSER_REFRESH', 0xA8],
        ['BROWSER_STOP', 0xA9],
        ['BROWSER_SEARCH', 0xAA],
        ['BROWSER_FAVORITES', 0xAB],
        ['BROWSER_HOME', 0xAC],
        ['VOLUME_MUTE', 0xAD],
        ['VOLUME_DOWN', 0xAE],
        ['VOLUME_UP', 0xAF],
        ['MEDIA_NEXT_TRACK', 0xB0],
        ['MEDIA_PREV_TRACK', 0xB1],
        ['MEDIA_STOP', 0xB2],
        ['MEDIA_PLAY_PAUSE', 0xB3],
        ['MEDIA_LAUNCH_MAIL', 0xB4],
        ['MEDIA_LAUNCH_MEDIA_SELECT', 0xB5],
        ['MEDIA_LAUNCH_APP1', 0xB6],
        ['MEDIA_LAUNCH_APP2', 0xB7],
        ['OEM_1', 0xBA],
        ['OEM_PLUS', 0xBB],
        ['OEM_COMMA', 0xBC],
        ['OEM_MINUS', 0xBD],
        ['OEM_PERIOD', 0xBE],
        ['OEM_2', 0xBF],
        ['OEM_3', 0xC0],
        ['OEM_4', 0xDB],
        ['OEM_5', 0xDC],
        ['OEM_6', 0xDD],
        ['OEM_7', 0xDE],
        ['OEM_8', 0xDF],
        ['OEM_102', 0xE2],
        ['PROCESSKEY', 0xE5],
        ['PACKET', 0xE7],
        ['ATTN', 0xF6],
        ['CRSEL', 0xF7],
        ['EXSEL', 0xF8],
        ['EREOF', 0xF9],
        ['PLAY', 0xFA],
        ['ZOOM', 0xFB],
        ['NONAME', 0xFC],
        ['PA1', 0xFD],
        ['OEM_CLEAR', 0xFE],
        ['UNKNOWN', 0]
      ];

      module( "Dispatcher", {
        setup: function() {
          this.testCanvas = document.getElementById("test-canvas"); 
          this.elementAPI = {
            handlerList: {},
            eventListenerCount: 0,
            addEventListener: function( type, handler, preventDefault ) {
              this.eventListenerCount++;
              this.handlerList[type] = handler;
            },
            dispatchEvent: function( e ) {
              this.handlerList[e.type](e);        
            }
          };

          this.controllerAPI = {
            type: "Controller",
            onKeyDown: function() {},
            onKeyUp: function() {},
            onUpdate: function() {}
          };
        },
        teardown: function() {}
      });

      test("contructing the dispatcher service", function () {
        expect(2);
        var schedulerAPI = { insert: function() {} };
        var mockScheduler = sinon.mock(schedulerAPI);
        mockScheduler.expects( "insert" ).once();
        
        var dispatcher = new Dispatcher(schedulerAPI,
          {element: this.testCanvas});
        ok(dispatcher instanceof Dispatcher, "dispatcher is the right instance");
        ok( mockScheduler.verify(), "service tasks are scheduled" );
      });

      test( "construct a dispatcher without a DOM element", function() {
        expect( 2 );

        var dispatcher;

        dispatcher = new Dispatcher( null, null );
        equal( dispatcher.element, document, 
          "default element is document when options are missing" );

        dispatcher = new Dispatcher( null, {} );
        equal( dispatcher.element, document, 
          "default element is document when element option is missing" );
      });

      test( "keyboard events are buffered by dispatcher", function() {
        expect( 6 + 2*keyCodes.length );

        function makeMockKeyEvent( type, which, keyCode ) {
          return {'type': type, 'which': which, 'keyCode': keyCode};
        }
        
        // generate the events        
        var i;
        var keyboardEvents = [];
        var expectedNames = [];
        for( i = 0; i < keyCodes.length; ++ i ) {
          var pair = keyCodes[i];
          var name = pair[0];
          var code = pair[1];

          keyboardEvents.push(makeMockKeyEvent("keydown", code, null));
          expectedNames.push(name);
          keyboardEvents.push(makeMockKeyEvent("keyup", null, code));
          expectedNames.push(name);
        }

        var mockController = sinon.mock( this.controllerAPI );

        var dispatcher = new Dispatcher( null, {element: this.elementAPI} );
        dispatcher.registerComponent( 
          "0", // id
          this.controllerAPI );
        ok( dispatcher.hasOwnProperty( "_queue" ), 
          "dispatcher has a _queue property" );
        equal( dispatcher._queue.length, 0, "initial queue length is 0" );
        
        // for each event, dispatch it and verify that it is buffered
        for( i = 0; i < keyboardEvents.length; ++ i ) {
          var event = keyboardEvents[i];
          this.elementAPI.dispatchEvent( event );
        }

        equal( dispatcher._queue.length, keyboardEvents.length, 
          "queue length is correct" );
        for( i = 0; i < keyboardEvents.length; ++ i ) {
          deepEqual( dispatcher._queue[i], keyboardEvents[i], 
            "queued event found in dispatched events list" );
        }

        mockController.expects( "onKeyDown" ).exactly( keyCodes.length );
        mockController.expects( "onKeyUp" ).exactly( keyCodes.length );
        mockController.expects( "onUpdate" ).once();

        // verify that listeners were added and KeyDown/KeyUp events are 
        // dispatched to a mock controller
        dispatcher.dispatch();
        equal( this.elementAPI.eventListenerCount, 2, "addEventListener called twice" );
        ok( mockController.verify(), "controller mock expectations verified" );
      });

      // TD write test that correct data is received using expectedNames array
      
      // TD test dispatchers with more than one controller
    };
  }
);
