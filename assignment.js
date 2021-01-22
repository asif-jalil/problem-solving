// https://github.com/asif-jalil/problem-solving

function kilometerToMeter(kmValue) {
  if (kmValue > 0) {
    var meter = kmValue * 1000; // 1km = 1000m
    return meter;
  } else {
    return "Please provide a validate number";
  }
}

function budgetCalculator(watchQuantity, mobileQuantity, laptopQuantity) {
  if (watchQuantity >= 1 && mobileQuantity >= 1 && laptopQuantity >= 1) {
    var perWatch = 50;
    var perMobile = 100;
    var perLaptop = 500;

    var watchPrice = perWatch * watchQuantity;
    var mobilePrice = perMobile * mobileQuantity;
    var laptopPrice = perLaptop * laptopQuantity;

    var totalPrice = watchPrice + laptopPrice + mobilePrice;

    return totalPrice;
  } else {
    return "Please provide a validate number";
  }
}

function hotelCost(nightSpent) {
  if (nightSpent >= 1) {
    var first10Night = 100;
    var second10Night = 80;
    var otherNight = 50;

    if (nightSpent <= 10) {
      var totalCost = first10Night * nightSpent;
    } else if (nightSpent <= 20) {
      var firstPartCost = first10Night * 10;
      var secondPartCost = second10Night * (nightSpent - 10);
      var totalCost = firstPartCost + secondPartCost;
    } else {
      var firstPartCost = first10Night * 10;
      var secondPartCost = second10Night * 10;
      var otherPartCost = otherNight * (nightSpent - 20);
      var totalCost = firstPartCost + secondPartCost + otherPartCost;
    }
    return totalCost;
  } else {
    return "Please provide a validate number";
  }
}

function megaFriend(nameList) {
  if (typeof nameList != 'undefined' && nameList.length >= 1) {
    var listLength = nameList.length;
    var selectedName = nameList[0];
    var selectedNameLength = selectedName.length;
    for (i = 0; i < listLength; i++) {
      if (nameList[i].length > selectedNameLength) {
        selectedName = nameList[i];
        selectedNameLength = selectedName.length;
      }
    }
    return selectedName;
  } else {
    return "You didn't set any value";
  }
}