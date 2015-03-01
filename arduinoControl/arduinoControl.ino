const int buttonPin = 2;
#include <Bridge.h>
#include <HttpClient.h>


int buttonState = 0;

void setup() {
  Serial.begin(9600);
//  while (!Serial);
//  Serial.println("Starting bridge...\n");
   delay(2000);
  Bridge.begin();
  pinMode(buttonPin, INPUT);
 // delay(2000);
  
}


void loop() {
  
  HttpClient client;  
  buttonState = digitalRead(buttonPin);

  if (buttonState == HIGH) {
    Serial.println("high");
    client.get("128.122.6.152:3000/readingButton");
  } else {
    Serial.println("low");
    client.get("128.122.6.152:3000/dine2");
  }

  
  while (client.available()) {
    char c = client.read();
   // Serial.print(c); 
  }
  //Serial.flush();
  delay(2000);
}


