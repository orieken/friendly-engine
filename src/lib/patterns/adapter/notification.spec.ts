// let Faker = require('faker');
//
// class Notification {
//   id: number;
//   message: string;
//
//   constructor() {
//     this.id = Faker.random.number();
//     this.message = Faker.random.words();
//   }
//
//   CreateNotification() {
//   }
// }
//
// interface Notifier {
//   id: number;
//   message: string;
//   CreateNotification: Function;
// }
//
// enum NotifierType {
//   ErrorNotifier,
//   WarningNotifier,
//   SuccessNotifier
// }
//
// class NotifierAdapter implements Notifier{
//   public id: number;
//   public message: string;
//   public notifierType: NotifierType;
//
//   constructor(notifierType: NotifierType){
//     this.id = Faker.random.number();
//     this.message = Faker.random.words();
//     this.notifierType = notifierType;
//   }
//
//   public CreateNotification() {
//
//   }
//
// }
//
// describe('NotificationAdapter', () => {
//   let notificationAdapter: NotifierAdapter;
//
//   beforeEach(() => {
//
//     notificationAdapter = new NotifierAdapter(NotifierType.SuccessNotifier);
//   });
//
//   it('it exists', () => {
//     expect(notificationAdapter).toBeTruthy();
//   });
//
// });
//
// describe('Notification', () => {
//   let notification: Notification;
//
//   beforeEach(() => {
//     notification = new Notification();
//   });
//
//   it('it exists', () => {
//     expect(notification).toBeTruthy();
//   });
//
//   it('has an id', () => {
//     expect(notification.id).toBeDefined();
//   });
//
//   it('has a message', () => {
//     expect(notification.message).toBeDefined();
//   });
//
//   it('.CreateNotification is defined', () => {
//     expect(notification.CreateNotification).toBeDefined();
//   });
// });
//
