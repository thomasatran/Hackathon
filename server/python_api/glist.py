#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Jul 26 15:14:35 2018

@author: roshanprakash
"""

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/getmylist', methods = ['POST'])
def groceries_list():

    data = request.get_json()
    all_ingredients = {}

    for recipe in data['favoriteRecipes']:
        for ingredient in recipe['ingredients']:
            if not ingredient['name'] in all_ingredients.keys():
                all_ingredients[ingredient['name']] = {}
                all_ingredients[ingredient['name']]['quantity'] = ingredient['quantity']
                all_ingredients[ingredient['name']]['unit'] = ingredient['unit']

            else:
                all_ingredients[ingredient['name']]['quantity'] += ingredient['quantity']


    response = { 'grocery_list' : all_ingredients }
    return(jsonify(response))

if __name__ == '__main__':
    app.run(port=5000)
