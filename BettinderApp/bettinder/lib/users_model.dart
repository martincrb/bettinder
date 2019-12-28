import 'package:flutter/foundation.dart';

class User {
  final String userid;

  User({
    @required this.userid,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      userid: json['userid'] as String,
    );
  }
}