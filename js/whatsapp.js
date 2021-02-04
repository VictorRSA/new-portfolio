
   $(function () {
                $('#WAButton').floatingWhatsApp({
               phone: '1234567890', //WhatsApp Business phone number
               headerTitle: 'Chat with us on WhatsApp!', //Popup Title
               popupMessage: 'Hello, how can we help you?', //Popup Message
               showPopup: true, //Enables popup display
               buttonImage: '<img src="whatsapp.svg" />',
               position: "right" //Position: left | right
           });
       });
