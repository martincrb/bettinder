import 'package:bettinder/http_service.dart';
import 'package:bettinder/users_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter_tindercard/flutter_tindercard.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Bettinder',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {

  @override
  _HomePageState createState() => _HomePageState();
}


class _HomePageState extends State<HomePage>
    with TickerProviderStateMixin {
  
  final HttpService httpService = HttpService();
  var users = new List<User>();
  
  _getUsers() async {
    var response = await httpService.getUsers();
    this.setState(() {
      users = response;
    });
  }

  _addLike() async {
    var response = await httpService.getUsers();
  }

  initState() {
    super.initState();
    _getUsers();
  }

  dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    CardController controller; //Use this to trigger swap.
    if (users.length == 0 || users == null) {
      return CircularProgressIndicator();
    } else {
      return new Scaffold(
            body: new Center(
                child: Container(
                    height: MediaQuery.of(context).size.height * 0.6,
                    child: new TinderSwapCard(
                        orientation: AmassOrientation.BOTTOM,
                        totalNum: users.length,
                        stackNum: 6,
                        swipeEdge: 4.0,
                        maxWidth: MediaQuery.of(context).size.width * 0.9,
                        maxHeight: MediaQuery.of(context).size.width * 0.9,
                        minWidth: MediaQuery.of(context).size.width * 0.8,
                        minHeight: MediaQuery.of(context).size.width * 0.8,
                        cardBuilder: (context, index) => Card(
                              child: new Center(
                                child: Text('${this.users[index].userid}')
                              )
                            ),
                        cardController: controller = CardController(),
                        swipeUpdateCallback:
                            (DragUpdateDetails details, Alignment align) {
                          /// Get swiping card's alignment
                          if (align.x < 0) {
                            //Card is LEFT swiping
  
                          } else if (align.x > 0) {
                            //Card is RIGHT swiping
                          }
                        },
                        swipeCompleteCallback:
                            (CardSwipeOrientation orientation, int index) {
                          /// Get orientation & index of swiped card!
                          if (orientation == CardSwipeOrientation.LEFT) {
                            httpService.addLike('bettatech', this.users[index].userid);
                          }
                        }))),
          );
    }
  }
}