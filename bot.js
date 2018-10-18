import discord
from discord.ext.commands import bot
from discord.ext import commands
import random
import asyncio
import time
 
 
bot = commands.Bot(command_prefix='!')
 
@bot.event
async def on_ready():
    print("Bot Is Starting Up... Please Wait")
    print("Name: " + bot.user.name)
    print("ID: " + bot.user.id)
    print("Bot Is Online! And Ready To Spam")
 
@bot.command(pass_context=True)
async def spammed(ctx):
    await bot.say("Hi There!")
    time.sleep(2)
    for i in range (0,10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000):
        await bot.say("hi noob")
 
bot.run ("your bot token here")
