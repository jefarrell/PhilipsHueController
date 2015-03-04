const int buttonPin = 2;
#include <Bridge.h>
#include <HttpClient.h>

int buttonState = 0;
int prevButtonState = 0;


void setup() {
  Serial.begin(9600);

  delay(10000);
  Bridge.begin();
  pinMode(buttonPin, INPUT);

  
}


void loop() {
  
  HttpClient client;  
  int buttonState = digitalRead(buttonPin);
  Serial.println(buttonState);
  if (buttonState != prevButtonState) {
  
    
    if (buttonState == 1) {
        client.get("104.131.40.84:3000/readingButton");
        Serial.println("high");
        
    } else {
        client.get("104.131.40.84:3000/dine2");
        Serial.println("low");       
     
    }
    
  prevButtonState = buttonState;
 
 }
}


