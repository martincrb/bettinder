import 'dart:convert';
import 'dart:ffi';

import 'package:bettinder/users_model.dart';
import 'package:http/http.dart';

class HttpService {
  final String usersURL = "http://94.237.25.81:3000/users/bettatech/proposals";
  final String likeURL = "http://94.237.25.81:3000/likes";

  Future<List<User>> getUsers() async {
    Response res = await get(usersURL);

    if (res.statusCode == 200) {
      List<dynamic> body = jsonDecode(res.body);

      List<User> users = body
          .map(
            (dynamic item) => User.fromJson(item),
          )
          .toList();

      return users;
    } else {
      throw "Can't get users.";
    }
  }

  Future<Void> addLike(fromuser, touser) async {
    post(likeURL, body: {'from': fromuser, 'to': touser});
  }
}